import { SessionBodyCreate, SessionReturn } from "../interfaces";
import { prisma } from "../database";
import { sessionReturnSchema } from "../schemas";
import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { sign } from "jsonwebtoken";
// import { jwtConfig } from "../configs";
import { status } from "../utils";

// TODO: Implementar retorno do token JWT (npm i jsonwebtoken)
export class SessionService {
  private account = prisma.account;

  public login = async ({
    username,
    password,
  }: SessionBodyCreate): Promise<SessionReturn> => {
    // VERIFICAR USERNAME
    const foundUser = await this.account.findFirst({
      where: { username: username },
    });

    // 401 - Unauthorized (adequado para login/credenciais)
    // 403 - Forbidden (servidor se recusa a fornecer o recurso pelo nivel de acesso do usuario)
    // 400 - Bad Request (nao é adequado)
    if (!foundUser) {
      throw new AppError("Invalid credentials.", status.HTTP_401_UNAUTHORIZED);
    }

    const passwordMatch = await compare(password, foundUser.password);

    // VERIFICAR SENHA
    if (!passwordMatch) {
      throw new AppError("Invalid credentials.", status.HTTP_401_UNAUTHORIZED);
    }

    // const { secret, expiresIn } = jwtConfig();
    const secret = process.env.SECRET_KEY!;
    const expiresIn = process.env.EXPIRES_IN || "1h";

    // GERAR TOKEN JWT
    const token = sign(
      { favoriteColor: foundUser.favoriteColor, role: foundUser.role },
      secret,
      {
        expiresIn: expiresIn,
        subject: foundUser.id.toString(),
      }
    );

    /*
    Erro era gerado por ter passado a string diretamente, invés de um objeto no formato
    pedido pelo schema
    return sessionReturnSchema.parse(token);
    
    Formato esperado:
    { token: 'seu_token" }
    Formato enviado:
    'seu_token'
    */
    return sessionReturnSchema.parse({ token });
    // return { token };
  };
}
