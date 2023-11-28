import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class BotopsApi implements ICredentialType {
	name = 'cotopsApi';

	displayName = 'Botops API';

	documentationUrl = 'coda';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}
