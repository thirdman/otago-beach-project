import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';

import DevTools from 'mobx-react-devtools';
import { Section } from '../components';

@observer
export default class Editor extends Component {
	render() {
		const store = this.props.store;

		return (
			<div>
				{'Editor'}
				<button onClick={this.newSection}>{'Add section'}</button>
				{store.sections.map((section, key) =>
					<Section
						key={`section-${key}`}
						data={section}
					/>
				)}
				<DevTools />
			</div>
		);
	}

	@autobind
	newSection() {
		this.props.store.addSection({
			text: 'kennek',
			ticked: false
		});
	}
}