use wasm_bindgen::prelude::*;
use canonical_json::ser::to_string as cj_to_string;

fn jstringify(x: impl std::fmt::Display) -> JsValue {
    JsValue::from_str(&x.to_string())
}

#[wasm_bindgen]
pub fn stringify(val: &JsValue) -> JsValue {
    let v = val.into_serde().map_err(jstringify).unwrap();

    JsValue::from_str(&cj_to_string(&v).unwrap())
}
