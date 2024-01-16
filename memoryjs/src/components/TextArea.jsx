import React from "react";
import ListTab from './NotesList'
import TextAreaHeader from "./TextAreaHeader";
import WriteHere from "./WriteHere";

export default function textArea(){
    return (
        <>
        <div className="flex h-[90vh]">
            <ListTab />
            <div className="flex flex-grow flex-grow-1 h-[90vh] border border-slate-200 bg-slate-200 ">
                <div className="bg-slate-100 lex flex-grow flex-grow-1 px-5 py-2 font-mono">
                    <span className="ml-3 font-semibold">Item1 / Task1</span>
                    <div id="writeHere" className="bg-white rounded-lg mt-1 h-[86vh]">
                        <TextAreaHeader />
                        <WriteHere />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
