import Roles from "../models/roles.model"
import { GenericoController } from './generico.controller';

export class RolesController extends GenericoController {

	constructor() {
		super(Roles)
	}

}