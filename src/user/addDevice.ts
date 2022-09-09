const responseArgs = `{
	id,
	created_at,
	auth {
		id,
		created_at,
		public
	}
}`;

export function addDevice ():string {
	return `query {
		addDevice ${responseArgs}
	}`;
}
