export class Customer 
{
	customerId: number | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	username: string | undefined;
	password: string | undefined;
	
	
	constructor(customerId?: number, firstName?: string, lastName?: string, username?: string, password?: string)
	{
		this.customerId = customerId;		
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
	}
}
