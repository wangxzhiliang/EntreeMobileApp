import { Customer } from '../models/customer';

export class CreateCustomerReq
{
    customer: Customer | undefined;


    constructor(customer?: Customer)
	{		
		this.customer = customer;
	}
}
