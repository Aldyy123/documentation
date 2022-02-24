import firestore from "./init";

const readDocuments = async (id) => {
  try {
    const documentation = await firestore
      .collection("documentation")
      .doc(id)
      .get();
    return documentation
  } catch (error) {
    console.log(error.message);
  }
};

const getUrlRoutes = async (data) => {
  try {
    return await firestore.collection("routes-documentation")
    .get();
  } catch (error) {
    console.log(error);
  }
};

export { readDocuments, getUrlRoutes };
