const js = JSON.stringify;

export type UserRegisterInput = {
	user:{
		email:string;
		password:string;
	};
};

const responseArgs = `{
	id,
	created_at,
	email,
	auth {
		id,
		created_at,
		password
	}
}`;

export function register (
	input:UserRegisterInput
):string {
	const email = input?.email;
	const password = input?.password;
	if (!email || !password) { return ''; }
	return `query {
		register (user:{email:${js(email)},password:${js(password)}})${responseArgs}
	}`;
}
