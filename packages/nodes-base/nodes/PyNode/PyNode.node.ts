import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { PyNodeV1 } from './V1/PyNodeV1.node';
import { PyNodeV2 } from './V2/PyNodeV2.node';
import { PyNodeV3 } from './V3/PyNodeV3.node';

export class PyNode extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'PyNode',
			name: 'pyNode',
			icon: 'fa:at',
			group: ['output'],
			subtitle: '={{$parameter["requestMethod"] + ": " + $parameter["url"]}}',
			description: 'Makes an HTTP request and returns the response data',
			defaultVersion: 4.1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new PyNodeV1(baseDescription),
			2: new PyNodeV2(baseDescription),
			3: new PyNodeV3(baseDescription),
			4: new PyNodeV3(baseDescription),
			4.1: new PyNodeV3(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
