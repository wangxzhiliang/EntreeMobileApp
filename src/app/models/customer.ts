<<<<<<< HEAD
export class Customer {
=======
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
>>>>>>> 510e93678aa1edf79bf6fd2b3c57079a343e7ed0
}
