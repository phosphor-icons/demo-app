#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use serde::{Deserialize, Serialize};
use std::{fs::File, io::Read};

mod cmd;

#[derive(Serialize, Deserialize, Debug)]
struct Note {
  id: String,
  content: String,
  locked: bool,
}

#[derive(Serialize, Deserialize, Debug)]
struct Settings {
  has_onboarded: bool,
}

#[derive(Serialize, Deserialize, Debug)]
struct AppState {
  settings: Settings,
  notes: Vec<Note>,
}

fn main() {
  tauri::AppBuilder::new()
    .invoke_handler(|_webview, arg| {
      use cmd::Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => {
          Err(e.to_string())
        }
        Ok(command) => {
          match command {
            // definitions for your custom commands from Cmd here
            Load => {
              //  your command code
              println!("Loading");
              let mut file = File::open("data/notes.json").expect("Could not open notes.json");
              let mut buf = String::new();
              file.read_to_string(&mut buf).expect("Could not read notes.json");
              println!("{}", buf);
            },
            Save { payload} => {
              let data: AppState = serde_json::from_str(&payload).expect("Could not deserialize notes!");
              println!("{:?}", data);
              serde_json::to_writer_pretty(&File::create("data/notes.json").expect("Could not open file"), &data).expect("Could not write to file");
            },
            Sync { payload } => {
              println!("{}", payload);
            }
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}
