import { z } from "zod";
import { bandSchema, bandPayloadCreateSchema } from "../schemas";

type Band = z.infer<typeof bandSchema>;
type BandPayloadCreate = z.infer<typeof bandPayloadCreateSchema>;

// DEFININDO UM CONTRATO SOBRE COMO DEVE SER UM SERVICO DE BAND
interface IBandService {
  list(): Promise<Array<Band>>;
  create(payload: BandPayloadCreate): Promise<Band>;
  retrieve(bandId: number): Promise<Band>;
}

export { Band, BandPayloadCreate, IBandService };
