type ID = `${number}`|number;
type Float = `${number}`|number;
export type Location = {
	id:ID;
	created_at:ID;
	latitude:Float;
	longitude:Float;
	accuracy:Float;
	altitude?:Float|null;
	altitudeAccuracy?:Float|null;
	heading?:Float|null;
	speed?:Float|null;
};
export type LocationInput = Omit<Omit<Location, 'id'>, 'created_at'>;
export type DeviceReportLocationInput = {
	location:LocationInput;
};

const oe = Object.entries;
const responseArgs = `{
	id,
	created_at,
	latitude,
	longitude,
	accuracy,
	altitude,
	altitudeAccuracy,
	heading,
	speed
}`;

export function reportLocation (
	input:DeviceReportLocationInput
):string {
	const _ = (
		oe(input?.location)
			.map(([k, v]) => (`${k}:${v}`))
			.join(',')
	);
	return `query {
		reportLocation(location:{${_}}) ${responseArgs}
	}`;
}
