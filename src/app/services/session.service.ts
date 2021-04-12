import { Injectable } from '@angular/core';

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
