import { Accordion } from "flowbite-react";
import { useCallback, useEffect, useRef } from 'react';
import hljs from "highlight.js";

// Then register the languages you need

export function InputData() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div className="px-6 mt-6">
            <Accordion collapseAll>
                <Accordion.Panel>
                <Accordion.Title>Input Data</Accordion.Title>
                <Accordion.Content>
                    <pre>
                        <code>
                            {JSON.stringify(require('../input.json'), null, 4)}
                        </code>
                    </pre>
                </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
  }

  export default InputData;