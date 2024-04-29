import {
  Notify
} from "quasar";
export function sendNotify(e, type, position) {
  Notify.create({
    message: e,
    type: type,
    position: position,
    actions: [{
      label: "Закрыть",
      color: "white",
    }, ],
  });
}
