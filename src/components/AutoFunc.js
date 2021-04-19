import { useState } from 'react';

const AutoFunc = (props) => {
    const [inputVal, setInputVal] = useState("");

    return (
      <section>
        <h1>Autocomplete</h1>
        <div className="auto">
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder="Search..."
          />
          <ul className="auto-dropdown" onClick={this.selectName}>
            <TransitionGroup>{results}</TransitionGroup>
          </ul>
        </div>
      </section>
    );
}

export default AutoFunc;