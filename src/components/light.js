
Light = THREE.Light;
Light.FIELDS = {
	color: Field.Color(),
	intensity: Field.Decimal(1.0),
	castShadow: Field.Boolean(false),
};

Light.prototype.export = function()
{
	let json = this.toJSON().object;
	for (let attr of ['shadow']) {
		delete json[attr];
	}
	return json;
};

AmbientLight = THREE.AmbientLight;
AmbientLight.base = Light;
AmbientLight.FIELDS = {
	castShadow: null,
};
AmbientLight.ICON = 'bolt';

DirectionalLight = THREE.DirectionalLight;
DirectionalLight.base = Light;
DirectionalLight.ICON = 'sun';

PointLight = THREE.PointLight;
PointLight.base = Light;
PointLight.FIELDS = {
	distance: Field.Decimal(),
	decay: Field.Decimal(1.0),
};
PointLight.ICON = 'lightbulb';
