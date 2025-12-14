#!/usr/bin/env python3
"""Write a Python function that lists all documents in a collection:"""


def list_all(mongo_collection):
    """Return an empty list if no document in the collection"""
    if mongo_collection is None:
        return []
    return mongo_collection.find()
