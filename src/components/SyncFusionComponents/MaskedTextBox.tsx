import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

const MaskedTextBox = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <b className='label'>Enter the mobile number</b>
                    <MaskedTextBoxComponent mask={'000-000-0000'} />
                </div>
                <div className="col-md-4">

                    <b>sets mask with the mask element '#' which accepts any single digit from '0' to '9', space, + and - signs</b>
                    <MaskedTextBoxComponent mask={'#####'}  placeholder= {'Mask ##### (ex: 012+-)'} floatLabelType='Always'/>
                </div>
                <div className="col-md-4">
                    <b>sets mask format with the mask element 'L' which allows only alphabets('A-Z and a-z')</b>
                    <MaskedTextBoxComponent mask={'LLLLLL'}  placeholder= {'Mask LLLLLL (ex: Sample)'} floatLabelType='Always'/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <b>sets mask format with the mask element '&' which allows `alphabets`, `numbers` and `special characters`</b>
                    <MaskedTextBoxComponent mask={'&&&&&'}  placeholder= {'Mask &&&&& (ex: A12@#)'} floatLabelType='Always'/>
                </div>
                <div className="col-md-4">
                    <b>sets mask format with the mask element  which converts all characters that follow to upper case and  which converts all characters that follow to lower case</b>
                    <MaskedTextBoxComponent mask={'>LLL<LLL'}  placeholder= {'Mask >LLL<LL (ex: SAMple)'} floatLabelType='Always'/>
                </div>
                <div className="col-md-4">
                    <b>sets mask format with the mask element '\' which turns mask element `A` into a literal and it displays the alphabet `A`</b>
                    <MaskedTextBoxComponent mask={'\A999'}  placeholder= {'Mask \A999 (ex: A321)'} floatLabelType='Always'/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <b></b>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
            </div>
        </div>
    );
}

export default MaskedTextBox;
