// PWASM intrinsics

// https://github.com/paritytech/pwasm-std/blob/82a84d10c892ff19592044585bd30c6170543b2a/src/panic.rs
export declare function panic(payload_ptr: usize, payload_len: u32) : void;

// https://github.com/paritytech/pwasm-std/blob/82a84d10c892ff19592044585bd30c6170543b2a/src/logger.rs
export declare function debug(str_ptr: usize, str_len: u32) : void;

// https://github.com/paritytech/pwasm-ethereum/blob/984658d409ca7d60af41c34a20aec339dd986e88/src/storage.rs
export declare function storage_read(key_ptr: usize, dst_ptr: usize) : void;
export declare function storage_write(key_ptr: usize, dst_ptr: usize) : void;

// https://github.com/paritytech/pwasm-ethereum/blob/984658d409ca7d60af41c34a20aec339dd986e88/src/ext.rs
export declare function ccall(
  gas: i64,
  address_ptr: usize,
  val_ptr: usize,
  input_ptr: usize,
  input_len: u32,
  result_ptr: usize,
  result_len: u32,
) : i32;

export declare function dcall(
  gas: i64,
  address: usize,
  input_ptr: usize,
  input_len: u32,
  result_ptr: usize,
  result_len: u32,
) : i32;

export declare function scall(
  gas: i64,
  address: usize,
  input_ptr: usize,
  input_len: u32,
  result_ptr: usize,
  result_len: u32,
) : i32;

export declare function blockhash(number: i64, dest_ptr: usize) : void;
export declare function balance(address_ptr: usize, dest_ptr: usize) : void;
export declare function coinbase(dest_ptr: usize) : void;
export declare function timestamp() : i64;
export declare function blocknumber() : i64;
export declare function difficulty(dest_ptr: usize) : void;
export declare function gaslimit(dest_ptr: usize) : void;
export declare function sender(dest_ptr: usize) : void;
export declare function address(dest_ptr: usize) : void;
export declare function value(dest_ptr: usize) : void;
export declare function origin(dest_ptr: usize) : void;
export declare function elog(topic_ptr: usize, topic_count: u32, data_ptr: usize, data_len: u32) : void;
export declare function create(endowment_ptr: usize, code_ptr: usize, code_len: u32, result_ptr: usize) : i32;
export declare function suicide(refund_ptr: usize) : void;
export declare function ret(ptr: usize, len: u32) : void;
export declare function input_length() : u32;
export declare function fetch_input(dst_ptr: usize) : void;