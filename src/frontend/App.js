import ExitModal from './pages/ExitModal.js';

componentDidMount = () => {
    window.addEventListener('resize', this.resize);
    this.resize();
    this.switchModal('exit')

    else if (selectedInnerType == 'exit') {
        this.setState({
          modalType: 'exit',
          modalInnerType: selectedInnerType,
        });
      } 


      {this.state.modalType === 'exit' && (
        <ExitModal
          switchModal={this.switchModal}
        />
      )}