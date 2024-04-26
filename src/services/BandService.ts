import { Band, BandPayloadCreate, IBandService } from "../interfaces";
import { prisma } from "../database";
import { bandSchema } from "../schemas";
import { injectable } from "tsyringe";
import { NotFoundError } from "../errors/AppError";

@injectable()
export class BandService implements IBandService {
  private band = prisma.band;

  public list = async (): Promise<Array<Band>> => {
    const bands = await this.band.findMany();

    return bandSchema.array().parse(bands);
  };

  public create = async (payload: BandPayloadCreate): Promise<Band> => {
    const newBand = await this.band.create({ data: payload });
    console.log(newBand);

    return bandSchema.parse(newBand);
  };

  public retrieve = async (bandId: number): Promise<Band> => {
    const band = await this.band.findUnique({ where: { id: bandId } });

    if (!band) {
      throw new NotFoundError("Band not found.");
    }

    return band;
  };
}
