# Music Recommender System

This project is a music recommender system that suggests songs based on the similarity of their lyrics. It uses a combination of TF-IDF vectorization and cosine similarity to find similar songs. The recommendations are displayed using Streamlit, and album covers are fetched from the Spotify API.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

3. Download the necessary NLTK data:
    ```sh
    python -m nltk.downloader punkt
    ```

## Usage

1. Prepare the dataset:
    - Place your song dataset in the [spotify_millsongdata.csv](http://_vscodecontentref_/0) file.

2. Run the Jupyter notebook to preprocess the data and generate the similarity matrix:
    ```sh
    jupyter notebook Recommender-engine.ipynb
    ```

3. Start the Streamlit app:
    ```sh
    streamlit run Recommender-system.py
    ```

4. Open the Streamlit app in your browser and select a song to get recommendations.

## Files

- [Recommender-engine.ipynb](http://_vscodecontentref_/1): Jupyter notebook for data preprocessing and generating the similarity matrix.
- [Recommender-system.py](http://_vscodecontentref_/2): Streamlit app for displaying song recommendations.
- [spotify_millsongdata.csv](http://_vscodecontentref_/3): CSV file containing the song dataset.
- [df.pkl](http://_vscodecontentref_/4): Pickle file containing the preprocessed song data.
- [similarity.pkl](http://_vscodecontentref_/5): Pickle file containing the similarity matrix.

