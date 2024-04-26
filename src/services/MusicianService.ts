import { Musician, MusicianPayload } from "../interfaces";
import { prisma } from "../database";
import { musicianSchema } from "../schemas";

export class MusicianService {
  private musician = prisma.musician;

  // TODO - Implementar a listagem de musicos de uma banda
  // public list = async (): Promise<Array<Musician>> => {
  //   return await this.musician.findMany();
  // };

  public create = async (payload: MusicianPayload): Promise<Musician> => {
    const newMusician = await this.musician.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        groupMembers: {
          create: {
            joined: payload.joined,
            left: payload.left,
            band: {
              connect: {
                id: payload.bandId,
              },
            },
          },
        },
      },
    });

    return musicianSchema.parse(newMusician);
  };
}
