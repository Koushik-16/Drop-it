import { Flex, theme } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import JoditEditor from "jodit-react";
import {  useColorMode, useColorModeValue } from '@chakra-ui/react'
const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  enableDragAndDropFileToEditor: true,
  textColor : 'black',
  theme : 'dark',
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

 
};


function Editor({setDescription,textColor}) {
  const { colorMode } = useColorMode();
  // const value = useColorModeValue('light', 'dark');
    const editor = useRef(null);
    
    

    
  return (
    <JoditEditor  ref={editor} onChange={(des) => setDescription(des)} width="100%" maxWidth={"100%"} config={config}    />
  )
}

export default Editor