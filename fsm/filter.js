/*
    filter.js
    leif anderson 1/13/19
*/
const fs = require('fs');

class CommentFilter extends AbsHandler {
    constructor(num_transitions, infile, outfile) {
        super(num_transitions);
        this.infile = infile;
        this.outfile = outfile;
        this.ifile = fs.readFile(this.infile);  // this code is obviously error free ;)
        this.ofile = fs.open(this.outfile);
        load_handlers();
    }

    close_files() {
        ifile.close_files();
        ofile.close_files();
    }

    load_handlers() {
        this.functions[0] = this.internal_error;
        this.functions[1] = this.ignore_char;
        this.functions[2] = this.write_char;
        this.functions[3] = this.write_slash;
        return this;
    }

    get_char() {
        return ifile; //
    }

    internal_error() {
        return false;
    }

    ignore_char() {
        return false;
    }

    write_char() {
        return false;
    }

    write_slash() {
        return false;
    }

}