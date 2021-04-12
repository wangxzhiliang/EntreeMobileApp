export class Customer 
{
	customerId: number | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	password: string | undefined;
	
	
	constructor(customerId?: number, firstName?: string, lastName?: string, email?: string, password?: string)
	{
		this.customerId = customerId;		
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}
}
