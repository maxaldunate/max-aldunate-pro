import React from 'react';
import ExampleWorkModal from './example-work-modal';
import ExampleWorkBubble from './example-work-bubble';

class ExampleWork extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			'modalOpen': false,
			'selectedExample': this.props.work[0]
		}

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(evt, example){
		this.setState({
			'modalOpen': true,
			'selectedExample': example
		});
	}

	closeModal(evt){
		this.setState({
			'modalOpen': false
		});
	}

	render() {
		return (
			<span>
				<section className="section section--alignCentered section--description">
					{this.props.work.map( (example, idx) => {
						return (
							<ExampleWorkBubble example={example} key={idx} openModal={this.openModal} />
							)
					})
				}
			    </section>

			    <ExampleWorkModal 
			    	example={this.state.selectedExample}
			     	open={this.state.modalOpen} 
			     	closeModal={this.closeModal}
			     />
		    </span>
		)
	}
}

export default ExampleWork;
