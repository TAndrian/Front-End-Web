import {DocumentType} from './documentType';

export class Document{
    constructor(id: number, nomDocument: string, imagesUrl: string[], documentType: DocumentType) {
        this._id = id;
        this._nomDocument = nomDocument;
        this._imagesUrl = imagesUrl;
        this._documentType = documentType;
    }
    private _id: number;
    private _nomDocument: string;
    private _imagesUrl: string[];
    private _documentType: DocumentType;
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nomDocument(): string {
        return this._nomDocument;
    }

    set nomDocument(value: string) {
        this._nomDocument = value;
    }

    get imagesUrl(): string[] {
        return this._imagesUrl;
    }

    set imagesUrl(value: string[]) {
        this._imagesUrl = value;
    }

    get documentType(): DocumentType {
        return this._documentType;
    }

    set documentType(value: DocumentType) {
        this._documentType = value;
    }
}
