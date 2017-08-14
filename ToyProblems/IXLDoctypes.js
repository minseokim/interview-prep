// fileName,owner,docType,applicationId,contentLength
const input = `bank_statement_123,Tony Stark,bank_statement,1,1000
    tax_document_1,Tony Stark,tax_return,1,16001
    tax_document_2,Steve Rogers,tax_return,2,2000
    document_423,Thor Odinson,tax_return,3,1500
    medical_report_1,Thor Odinson,medical_history,3,15000
    prescription_1,Stephen Strange,medical_history,5,200
    steven_asset,Stephen Strange,bank_statement,5,4000
    john_paystub,John Snow,paystub,0,2000
    curry_insurance,Stephen Curry,proof_insurance,-1,6000`;

//applicationId : set of doctypes
//set of all doctypes

//go through each applicationId, find the missing doctypes and store in a new Map(doctype : missingId's)

const process = input => {
    let list = input.split("\n");
    const idToDocTypeMap = {};
    const doctypeSet = new Set();
    let currentApplicationId, currentDoctype;

    list.forEach(currentDocument => {
        currentDocument = currentDocument.split(",");
        currentApplicationId = currentDocument[3];
        currentDoctype = currentDocument[2];

        //Store doctypes in a set first
        doctypeSet.add(currentDoctype);

        if (!idToDocTypeMap[currentApplicationId]) {
            idToDocTypeMap[currentApplicationId] = new Set();
        }

        idToDocTypeMap[currentApplicationId].add(currentDoctype);
    });

    //Iterate over the set of all doctypes, for each doctype check for missing Id by checking every single applicationId
    let applicationIds = Object.keys(idToDocTypeMap);
    let doctypeToMissingIdMap = {};

    for (let doctype of doctypeSet) {
        if (!doctypeToMissingIdMap[doctype]) {
            doctypeToMissingIdMap[doctype] = [];
        }

        for (let id of applicationIds) {
            //Find missing doctype
            if (!idToDocTypeMap[id].has(doctype)) {
                doctypeToMissingIdMap[doctype].push(id);
            }
        }
    }

    //Doctype : missingId's
    let doctypesSorted = Object.keys(doctypeToMissingIdMap).sort();

    doctypesSorted.forEach(doctype => {
        console.log(doctype);
        let sortedList = doctypeToMissingIdMap[doctype].sort();
        let sortedListStr = "";
        sortedList.forEach(id => {
            sortedListStr += id + " ";
        });
        console.log(sortedListStr);
    });
};

process(input);

// For each docType, print out the doc type on one line, and then print the ids of the users that are missing that document
// docTypes are alphabetically sorted
// the applicationId's are numerically sorted
// space delimeter
// only print the docType if there is at least one missing

/*
bank_statement
-1 0 2 3
medical_history
-1 0 1 2
paystub
-1 1 2 3 5
proof_insurance
0 1 2 3 5
tax_return
-1 0 5
*/

// # sorry, using python just for speed, the logic should be the same
// from copy import deepcopy # I don't want to write this myself

// raw_input = ```bank_statement_123,Tony Stark,bank_statement,1,1000
//     tax_document_1,Tony Stark,tax_return,1,16001
//     tax_document_2,Steve Rogers,tax_return,2,2000
//     document_423,Thor Odinson,tax_return,3,1500
//     medical_report_1,Thor Odinson,medical_history,3,15000
//     prescription_1,Stephen Strange,medical_history,5,200
//     steven_asset,Stephen Strange,bank_statement,5,4000
//     john_paystub,John Snow,paystub,0,2000
//     curry_insurance,Stephen Curry,proof_insurance,-1,6000```

// def parse_input(input_string):
//   return [line.split(',') for line in input_string.split('\n')] # don't worry about this syntax if you don't understant it

// #i think i get it, it's just splitting it twice # yup, that's right, pound sign (#) is a comment in Python

// example_entries = parse_input(raw_input)

// # ok, we have our input, now let's start with the algorithm:

// # gather users
// users = ({1, 2, 3, 5, 0, -1}) #this is a full loop over the input, but we're skipping that for simplicity // gotcha!

// # analyze doctypes
// def calculate_missing_users(entries):
//     result = {}
// # wait but ron, is result a set of all doctypes?
// # not yet, it starts empty
// # oh we're building it as we go, got it.. so if we havent seen that doctype yet, we set it to a full copy of the users set.
// # ok got it.
// # we don't care about the doctype until we encounter it in the list of entries, basically we don't need to precompute all of the doctypes.
//     # we're being lazy, i.e. "eh, when we encounter a new doctype, add it, until then it doesn't exist in our world."

//   for entry in entries:
//     doctype = entry[2]
//     user_id = entry[3]
//     if doctype not in result: # <------ here is where we add the doctypes if they don't yet exist
//       result[doctype] = deepcopy(users) # <-------------- this technique is sortof like a lazy evaluation of the doctypes
//     result[doctype].remove(user_id)

//   return result

//   #so im still not totally getting the building of the results object :(
//   #let me walk thru it with the example
//     # so with the first statement, we set "bank_statement" : deepcopy(users)
//   # so the current user_id is 1, so we remove it from the set...OH....dang! i got it.
//   # basically, you're saying: hey we found a new doctype, add it to the list,
//   # and then oh, user 1 is NOT missing it, so delete them from the set
//   # ah....makes sense. so we only care about what's MISSING, thats why we start from a full set. and we remove all the ones we encounter.
//     # super neat. :D
//     # you got it
//   # and the nice thing is that the code is super consise and clean
//   # yeah. so is the important takeaway that since we care about whats MISSING, we can use a set and just remove the ones we see?
//   # Or what i was doing extra with my previous solution
//     # 3 parts?
//     # got it. what about knowing to store the userIds in a set?
//   # wow, thats actually a great heuristic to keep in mind of. awesome. thanks SO much. cool. it's all making sense now. got it.
//   # thanks so much Ron! i learned a ton.

//   # so, you can use a couple of heuristics:
//         # split the solution into as many logical parts as necessary, I guess I actually have 3 in mine, not 2: parse, algorithm, print
//     # make sure you understand what you're actually loking for and different ways you can arrive there.
//         # it's really difficult to look for something that isn't there, but you can keep track of things by removing things that ARE there
//     # don't mix up your different parts - isolate things and do one operation at a time, this also helps with code reusability

// # now we're basically done, the last step is just to print everything out
// #perfect!
// # fantastic. im gonna go ahead and implement in JS. Thanks again Ron. :) For sure!
// # you're welcome
// # I'm not 100% sure this code would run in Python, but I'll stand behind the logic and pseudocode at least

// # printing doesn't really need it's own function, but you could make one if you want
// def print_results(analyzed_data)
//     for doctype, missing_users in analyzed_data.items():
//     print doctype
//         print sorted(list(missing_users)) # or whatever you need to do in JS here, there's probably a cleaner way to do it in python as well

// example_entries = parse_input(raw_input)
// result = calculate_missing_users(example_entries)
// print_results(result)
// # so, it's short, easy to read, and reuseable with different entries.
// # I learned to make a "parse input" function when doing Stanford's
// # algorithms course, and I had to quickly switch back and forth between different example/test inputs
