import {DocumentType} from './documentType';

export class Document {
    constructor(nomDocument: string, imagesUrl: string[], documentType: DocumentType) {
        this._nomDocument = nomDocument;
        this._imagesUrl = imagesUrl;
        this._documentType = documentType;
    }

    private _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _nomDocument: string;

    get nomDocument(): string {
        return this._nomDocument;
    }

    set nomDocument(value: string) {
        this._nomDocument = value;
    }

    private _imagesUrl: string[];

    get imagesUrl(): string[] {
        return this._imagesUrl;
    }

    set imagesUrl(value: string[]) {
        this._imagesUrl = value;
    }

    private _documentType: DocumentType;

    get documentType(): DocumentType {
        return this._documentType;
    }

    set documentType(value: DocumentType) {
        this._documentType = value;
    }
}
