import { Flex } from '@chakra-ui/react';
import React from 'react'
import { useRef } from 'react';
import JoditEditor from "jodit-react";

const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    enableDragAndDropFileToEditor: true,
    buttons: [
        'source',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'ul',
        'ol',
        '|',
        'font',
        'fontsize',
        'brush',
        'paragraph',
        '|',
        'image',
        'table',
        'link',
        '|',
        'left',
        'center',
        'right',
        'justify',
        '|',
        'undo',
        'redo',
        '|',
        'hr',
        'eraser',
        'fullsize',
    ],
    uploader: { insertImageAsBase64URI: true },
    removeButtons: ['brush', 'file'],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    toolbarAdaptive: true,
    toolbarSticky: true,
     theme : 'light' 
    // style: {
    //     background: '#27272E',
    //     color: 'rgba(255,255,255,0.5)',
    // },
};

function Editor({setDescription,textColor}) {
    
    const editor = useRef(null);
  return (
    <JoditEditor ref={editor} onChange={(des) => setDescription(des)} width="100%" maxWidth={"100%"} textColor={textColor} config={config} />
  )
}

export default Editor