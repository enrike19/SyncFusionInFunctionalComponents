import { Count, HtmlEditor, Image, Link, RichTextEditor, Toolbar, RichTextEditorComponent, Inject } from '@syncfusion/ej2-react-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Image, Link, Toolbar, Count);


const RichTextEditorE = () => {

    const template = `
    <p><a href="http://www.syncfusion.com">The Rich Text Editor</a> component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
    <img alt="Logo" src="http://cdn.syncfusion.com/content/images/sales/buynow/Character-opt.png" />
    <p><b>Key features:</b></p>
    <ul>
        <li> <p>Provides IFRAME and DIV modes</p> </li>
        <li> <p>Capable of handling markdown editing.</p> </li>
        <li> <p>Contains a modular library to load the necessary functionality on demand.</p> </li>
        <li> <p>Provides a fully customizable toolbar.</p> </li>
        <li> <p>Provides HTML view to edit the source directly for developers.</p> </li>
        <li> <p>Supports third-party library integration.</p> </li>
    </ul>`;


    const rteObj = new RichTextEditor({
        height: 400,
        valueTemplate: template
    }, '#rteElement');

    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };




    return (
        <>
            <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings}>
                <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
                    Users can format their content using standard toolbar commands.</p>
                <p><b>Key features:</b></p>
                <ul>
                    <li>
                        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
                    </li>
                    <li>
                        <p>Capable of handling markdown editing.</p>
                    </li>
                    <li>
                        <p>Contains a modular library to load the necessary functionality on demand.</p>
                    </li>
                    <li>
                        <p>Provides a fully customizable toolbar.</p>
                    </li>
                    <li>
                        <p>Provides HTML view to edit the source directly for developers.</p>
                    </li>
                    <li>
                        <p>Supports third-party library integration.</p>
                    </li>
                    <li>
                        <p>Allows preview of modified content before saving it.</p>
                    </li>
                    <li>
                        <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
                    </li>
                    <li>
                        <p>Contains undo/redo manager.</p>
                    </li>
                    <li>
                        <p>Creates bulleted and numbered lists.</p>
                    </li>
                </ul>
                <Inject services={[Toolbar, HtmlEditor]}/>
            </RichTextEditorComponent>
        </>
    );
}

export default RichTextEditorE;
