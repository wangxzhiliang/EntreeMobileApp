import { Customer } from '../models/customer';



export class UpdateCustomerReq
{
    customer: Customer | undefined;

    constructor(customer?: Customer)
	{		
		this.customer = customer;
	}
}
