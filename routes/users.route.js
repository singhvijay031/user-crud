const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let mockData = [];

router.get("/", (req, res) => {
  res.send(mockData);
});

router.post("/", (req, res) => {
  let payLoad = req.body;
  payLoad = {
    id: uuidv4(),
    ...payLoad,
  };
  mockData.push(payLoad);
  res.json({
    message: "New User Created",
    data: payLoad,
  });
});

//Update users here
router.patch("/:id", (req, res) => {
  const userId = req.params.id;
  const newUpdatedValue = req.body;
  let indexToUpdate = mockData.findIndex((item) => {
    return item.id === userId;
  });
  const oldValueToBeUpdate = mockData[indexToUpdate];
  mockData[indexToUpdate] = {
    ...oldValueToBeUpdate,
    ...newUpdatedValue,
  };

  res.json({
    message: "User Updated",
    data: newUpdatedValue,
  });
  console.log(indexToUpdate);
});

//Delete users here
router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  let indexToDelete = mockData.findIndex((item) => {
    return item.id === userId;
  });
  const deletedValue = mockData.splice(indexToDelete, 1);

  res.json({
    message: "User Deleted",
    data: deletedValue,
  });
  console.log(indexToDelete);
});

module.exports = router;
