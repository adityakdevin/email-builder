import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesJs from 'grapesjs';
import grapesJSMJML from 'grapesjs-mjml'
import grapesBlocksBasic from 'grapesjs-blocks-basic';
import exportMjml from 'grapesjs-plugin-export'
function EmailBuilder() {
    const editor = grapesJs.init({
        container: '#gjs',
        fromElement: false,
        height: '100vh',
        width: 'auto',
        storageManager: false,
        plugins: [grapesJSMJML,grapesBlocksBasic,exportMjml],
        pluginsOpts: {
            [grapesJSMJML]: {}
        },
        blockManager: {
            appendTo:"#bloack",
            blocks: ['all']
        }
    });
    const panelManager = editor.Panels;
    console.log(panelManager.getPanels())
    const newButton = panelManager.addButton('options',{
        id: 'getMjml',
        className: 'getMjml',
        command: {
            run: function (editor){
                console.log(editor.runCommand('gjs-export-zip'))
            }
        },
        attributes: { title: 'Get Mjml'},
        label:"E",
        active: true,

    });
    return (
        <>
            <div id="gjs">

            </div>
            <div id="bloack"></div>
        </>
    );
}

export default EmailBuilder;