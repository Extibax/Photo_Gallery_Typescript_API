"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_photo(req, res) {
    console.log("Getting photo");
    return res.json({
        message: "Photo successfully get"
    });
}
exports.get_photo = get_photo;
function create_photo(req, res) {
    console.log("Saving photo");
    return res.json({
        message: "Photo successfully saved"
    });
}
exports.create_photo = create_photo;
