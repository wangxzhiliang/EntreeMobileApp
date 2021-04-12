import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';

import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class SessionService
{
	constructor()
	{

	}
  


	getIsLogin(): boolean
	{
		if(sessionStorage.isLogin == "true")
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	setCreditCardId(creditCardId: number | null): void {
		sessionStorage.creditCardId = creditCardId;
	}

	getCreditCardId(): number {
		return sessionStorage.creditCardId;
	}



	setIsLogin(isLogin: boolean): void
	{
		sessionStorage.isLogin = isLogin;
	}



	getCurrentCustomer(): Customer
	{
		return JSON.parse(sessionStorage.currentCustomer);
	}



	setCurrentCustomer(currentCustomer: Customer | null): void
	{		 
		sessionStorage.currentCustomer = JSON.stringify(currentCustomer);
	}

	

	getCreditCard(): CreditCard
	{
		return JSON.parse(sessionStorage.creditCard);
	}

	setCreditCard(creditCard: CreditCard | null): void
	{
		sessionStorage.creditCard = JSON.stringify(creditCard);
	}

	getEmail(): string
	{
		return sessionStorage.email;
	}



	setEmail(email: string | undefined): void
	{
		sessionStorage.email = email;
	}
	
	
	
	getPassword(): string
	{
		return sessionStorage.password;
	}

	setPassword(password: string | undefined): void
	{
		sessionStorage.password = password;
	}


}
