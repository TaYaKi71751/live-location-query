type ID = `${number}`|number;

export type UserDeactivateDeviceInput = {
	device:{id:ID}
};

const responseArgs = `{
	id,
	created_at,
	auth {
		id,
		created_at,
		public
	}
}`;

export function deactivateDevice (
	input:UserDeactivateDeviceInput
):string {
	return `query {
		deactivateDevice(device:{id:${input?.device?.id}}) ${responseArgs}
	}`;
}
