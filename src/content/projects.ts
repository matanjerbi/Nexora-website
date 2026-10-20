import { z } from 'zod';
import { projectSchema } from '@/domain';

/**
 * Portfolio. Add a project by appending one entry (and its image under `public/projects/`).
 * While this list is empty, the portfolio section and its nav link are hidden.
 */
export const projects = z.array(projectSchema).parse([] satisfies z.input<typeof projectSchema>[]);
