#!/usr/bin/env python3
"""Return the list of schools having a specific topic"""


from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """
    mongo_collection will be the pymongo collection object
    topic (string) will be topic searched
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find({'topics': topic}))
