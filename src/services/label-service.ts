import { Label } from "../models/Label";
import Task from "../models/Task";

export class LabelService {
  update(labelId: string, newLabel: any) {
    return Label.findByIdAndUpdate(
      { _id: labelId },
      { $set: newLabel },
      { new: true }
    );
  }
  findAll(userId: string) {
    return Task.aggregate([{ $match: { "userId": userId } },
    { $unwind: "$labels" },
    { $group: { _id: "$labels", uniqueValues: { $addToSet: "$labels" } } },
    { $project: { array: false, _id: true, uniqueValues: false } }])

  }

  save(labelName: string) {
    const label = new Label({ name: labelName });
    return label.save();
  }

  delete(labelId: string) {
    return Label.findByIdAndDelete(labelId);
  }
}
