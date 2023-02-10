// import Ajv from "ajv/dist/jtd"
// import addFormats from "ajv-formats"
// import schema from "../workflow-schema.jtd.json"
// import type { WorkflowSchema } from "../../definitions/workflow-schema"

// const ajv = new Ajv()
// addFormats(ajv)

// const validate = ajv.compile(schema);

// function isValid(data: unknown) {
//   const valid = validate(data);
//   expect(valid).toBeTruthy();
// }

// function isInvalid(data: unknown) {
//   const valid = validate(data);
//   expect(valid).toBeFalsy();
// }

describe("workflow", () => {
  describe("basic validations", () => {
    test("it works?", () => {});

    // test("accepts empty schema", () => isValid([]))
    // test("does not accept invalid action", () => isInvalid([{kind: "i-do-not-exist"}]))

    // test("accepts schema with multiple actions", () => isValid([{
    //   kind: 'sleep', ms: 100,
    // }, {
    //   kind: 'fetch', url: 'https://google.com'
    // }] as WorkflowSchema))
    
    // describe('sleep', () => {
    //   test("accepts it", () => isValid([{
    //     kind: 'sleep',
    //     ms: 100,
    //   }]))

    //   test("requires ms >= 0", () => {
    //     isValid([{
    //       kind: 'sleep',
    //       ms: 0
    //     }])

    //     isInvalid([{
    //       kind: 'sleep',
    //       ms: -1
    //     }])

    //     isInvalid([{
    //       kind: 'sleep',
    //     }])
    //   })
    // })

    // describe('fetch', () => {
    //   test("accepts it", () => isValid([{
    //     kind: 'fetch',
    //     url: 'https://google.com',
    //   }]))

    //   test("accepts valid url", () => isValid([{
    //     kind: 'fetch',
    //     url: 'https://google.com',
    //   }]))
    // })
  })
})