export class Customer 
{
	userId: number | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	password: string | undefined;
	
	
	constructor(userId?: number, firstName?: string, lastName?: string, email?: string, password?: string)
	{
		this.userId = userId;		
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}
}
