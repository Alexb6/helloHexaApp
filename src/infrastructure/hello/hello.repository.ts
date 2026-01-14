import { promises as fs } from 'fs';
import { HelloOutboundPort } from '../../application/hello/ports/hello.outbound.port';
import { Hello } from '../../domain/hello/hello.entity';

export class FileHelloRepository implements HelloOutboundPort {
  async read(): Promise<Hello> {
    const content = await fs.readFile('hello.txt', 'utf-8');

    return {
      message: content.trim(),
    };
  }
}

// export class FileHelloRepository extends HelloOutboundPort {
//   async read(): Promise<Hello> {
//     const content = await fs.readFile('hello.txt', 'utf-8');

//     return {
//       message: content.trim(),
//     };
//   }
// }
