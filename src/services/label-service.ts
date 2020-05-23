import { Label } from "../models/Label";

export class LabelService {
  update(labelId: string, newLabel: any) {
    return Label.findByIdAndUpdate(
      { _id: labelId },
      { $set: newLabel },
      { new: true }
    );
  }
  findAll() {
    return Label.find();
  }

  save(labelName: string) {
    const label = new Label({ name: labelName });
    return label.save();
  }

  delete(labelId: string) {
    return Label.findByIdAndDelete(labelId);
  }
}
