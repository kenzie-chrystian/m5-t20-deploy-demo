// import { Band, BandPayloadCreate, IBandService } from "../interfaces";
// import { bandSchema } from "../schemas";

// const bandsDB: Array<Band> = [];

// const genNextId = (): number => {
//   const lastBand: Band | undefined = bandsDB.sort((a, b) => a.id - b.id).at(-1);

//   if (lastBand) {
//     return lastBand.id + 1;
//   }

//   return 1;
// };

// export class BandInMemoryService implements IBandService {
//   public list = async (): Promise<Array<Band>> => {
//     console.log("LIST BAND IN MEMORY SERVICE");

//     return bandSchema.array().parse(bandsDB);
//   };

//   public create = async (payload: BandPayloadCreate): Promise<Band> => {
//     const newBand = {
//       id: genNextId(),
//       foundedAt: payload.foundedAt || null,
//       ...payload,
//     };
//     bandsDB.push(newBand);

//     console.log("CREATE BAND IN MEMORY SERVICE");
//     return bandSchema.parse(newBand);
//   };
// }

// export const bandInMemoryService = new BandInMemoryService();
