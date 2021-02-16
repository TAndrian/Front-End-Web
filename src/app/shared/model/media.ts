import {MediaType} from './mediaType';

export class Media {
    constructor(public nomMedia: string,
                public imagesUrl: string[],
                public mediaType: MediaType) {
    }
}
