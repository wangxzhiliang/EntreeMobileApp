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



	getUsername(): string
	{
		return sessionStorage.username;
	}



	setUsername(username: string | undefined): void
	{
		sessionStorage.username = username;
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
