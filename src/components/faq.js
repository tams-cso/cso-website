const React = require('react')
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')

class FAQ extends React.Component {
  componentDidMount() {
    // XXX: Stupid hack because IDK how to get file reading to work
    fetch('https://raw.githubusercontent.com/tams-cso/faq/master/README.md')
    .then(function(response) {
      response.text().then(function(data) {
      ReactDOM.render(<ReactMarkdown source={data} />, document.getElementById('container'))
      });
    })
  }

  render() {
    return (
      <div>
        <section style={{ minHeight: 600, marginBottom: 100 }}>
          <a name='faq' href="# " style={{ position: 'relative', top: -80 }}> </a>
          <h2>FAQ</h2>
          <div id='container' className='wrap' style={{ position: 'relative' }}>
          </div>
        </section>
      </div>
    );
  }
};

export default FAQ;
